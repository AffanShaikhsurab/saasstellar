import { Link } from '@remix-run/react'
import { GithubIcon } from 'lucide-react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '~/components/ui/select'
import useTheme, { changeTheme } from '~/hooks/use-theme'
import { cn } from '~/lib/utils'
import { type ThemeName } from '~/registry/themes'
import Saastellar from './icons/saasstellar'

const Navbar = () => {
    const [theme, setTheme] = useTheme()
    return (
        <div className='px-5 py-2'>
            <nav className='mx-auto flex max-w-7xl items-center justify-between'>
                <Link to='/' className='flex items-center gap-2'>
                    {/* <img src={saasstellar} alt='' width={28} height={26} />
                    <img height={50} width={50} src='./icon.png'>
                    </img> */}
                    <span  className='hidden text-lg font-semibold top-72 md:block'>
                        JourneyNext
                    </span>
                </Link>
                
            </nav>
        </div>
    )
}

export default Navbar
