import Button from "./Button"

const Header = ({ title }) => {
    return (
        <header>
         <h1>{title}</h1>
         <Button color='green' text='Add'/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Rachel is Reading'
}

export default Header
