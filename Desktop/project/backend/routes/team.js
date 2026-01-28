// routes/team.js
router.post('/invite', auth, checkPaidStatus, async (req, res) => {
    const { email, role = 'team_member' } = req.body;

    // Generate invite token (expires 7 days)
    const inviteToken = crypto.randomUUID();

    // Store pending invite
    const { error } = await supabaseService
        .from('team_invites')
        .insert({
            org_id: req.user.org_id,
            email,
            role,
            token: inviteToken,
            invited_by: req.user.id,
            expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
        });

    if (error) throw error;

    // Send magic link email
    await sendInviteEmail(email, inviteToken);

    res.json({ message: `Invite sent to ${email}` });
});

router.post('/accept-invite/:token', async (req, res) => {
    const { token } = req.params;

    // Verify + consume invite
    const { data: invite } = await supabaseService
        .from('team_invites')
        .select('*')
        .eq('token', token)
        .single();

    if (!invite || new Date(invite.expires_at) < new Date()) {
        return res.status(400).json({ error: 'Invalid/expired invite' });
    }

    // Supabase magic link login (no password)
    const { data: { session }, error } = await supabaseAnon.auth.signInWithOtp({
        email: invite.email,
        options: {
            emailRedirectTo: `${FRONTEND_URL}/team-joined?token=${token}`
        }
    });

    res.json({
        message: 'Check your email for magic link!',
        email: invite.email
    });
});
