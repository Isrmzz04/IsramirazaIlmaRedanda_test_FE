const Heading = ({children = "Heading Text"}) => {
  return (
    <h3 className="text-xl font-bold text-gray-900 sm:text-2xl mb-12">{children}</h3>
  )
}

export default Heading