import prisma from '../prisma'

export default async (req, res) => {
  const { method, body } = req
  if (method === 'POST') {
    try {
      const user = await prisma.user.create({
        data: body,
      })
      res.status(201).json({ success: true, user })
    } catch (error) {
      res
        .status(400)
        .json({
          success: false,
          message: 'Something went wrong, please try again.',
        })
    }
  }
  if (method === 'GET') {
    try {
      const users = await prisma.user.findMany({})
      res.status(200).json({ success: true, users })
    } catch (error) {
      res
        .status(400)
        .json({ success: false, message: 'Sorry cannot get users.' })
    }
  }
}
