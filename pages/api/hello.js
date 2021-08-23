// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const helloWorld = (_, res) => {
  res.status(200).json({ name: 'John Doe' })
};

export default helloWorld;
