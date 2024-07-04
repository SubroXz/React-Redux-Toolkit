import { useSelector } from "react-redux"
const Navbar = () => {
    const count = useSelector((state) => state.counter.value)
    return (
        <div>
            i am navbar and the counter is {count}
        </div>
    )
}
export default Navbar
