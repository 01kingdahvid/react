const Header = (props) => {
    const { title = "Welcome to Techstudio", desc = "Home of Techies"} = props
      return (
        <div>
            <div className="bg-light m-4 p-3 shadow-lg text-center">
                <h1 className='bg-primary text-light p-3'>{title}</h1>
                <p className='bg-info text-dark p-2 mx-4'>{desc}</p>
    
            </div>
        </div>
      )
    }
    
    export default Header