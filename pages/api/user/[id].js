import prisma from '../prisma'

export default async function handler(req, res) {
  const { method, query } = req
  const { id } = query
  if (method === 'DELETE') {
    try {
      await prisma.user.delete({
        where: {
          id: Number(id),
        },
      })
      res
        .status(200)
        .json({ success: true, message: 'User deleted successfully.' })
    } catch (error) {
      res
        .status(400)
        .json({ success: false, message: 'Sorry cannot delete user.' })
    }
  }
}
