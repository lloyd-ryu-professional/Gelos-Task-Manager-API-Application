export const authorizeRole = (...allowedRoles: number[]) => {
    return (req: any, res: any, next: any) => {
        if (!req.user) {
            return res.status(401).json({message: 'Authentication required'});
        }
        const role = Number(req.user.role);

        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({
                message: `Access denied: role ${role} cannot perform this action.`
            });
        }
        next();
    };
};