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
                    {/* <img src={saasstellar} alt='' width={28} height={26} /> */}
                    <Saastellar
                        aria-label='saasstellar logo'
                        linearFrom='text-primary'
                        className='w-7'
                        linearTo={cn(
                            'text-primary',
                            theme === 'yellow' && 'text-yellow-600',
                        )}
                    />
                    <span className='hidden text-lg font-semibold md:block'>
                        JourneyNext
                    </span>
                </Link>
                
            </nav>
        </div>
    )
}

export default Navbar
