export const authorizeRole = (...allowedRole: any[])=> {
    return (req: any, res: any, next: any) => {
        if (!req.user) {
            return res.status(401).json({message: 'Authentication required'})
        }
        const role = Number(req.user.role); // normalise
        if (!allowedRole.includes(req.user.role)) {
            return res.status(403).json({message: `Access denied: ${role} cannot perform this action.`})
        }
        next();
    }
}
