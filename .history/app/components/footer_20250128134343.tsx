import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='mt-24 bg-gradient-to-b from-transparent to-primary/20'>
            <div className='mx-auto max-w-7xl px-4 py-12'>
                <div className='grid grid-cols-1 gap-8 md:grid-cols-4'>
                    {/* Company Info */}
                    <div className='col-span-1'>
                        <h3 className='font-bold text-lg mb-4'>JourneyNext</h3>
                        <p className='text-sm text-muted-foreground'>
                            Personalizing your learning journey with AI-powered education.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className='col-span-1'>
                        <h3 className='font-bold text-lg mb-4'>Learn</h3>
                        <ul className='space-y-2 text-sm text-muted-foreground'>
                            <li><Link to="/courses" className='hover:text-primary'>Courses</Link></li>
                            <li><Link to="/learning-paths" className='hover:text-primary'>Learning Paths</Link></li>
                            <li><Link to="/features" className='hover:text-primary'>Features</Link></li>
                            <li><Link to="/success-stories" className='hover:text-primary'>Success Stories</Link></li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div className='col-span-1'>
                        <h3 className='font-bold text-lg mb-4'>Company</h3>
                        <ul className='space-y-2 text-sm text-muted-foreground'>
                            <li><Link to="/about" className='hover:text-primary'>About Us</Link></li>
                            <li><Link to="/contact" className='hover:text-primary'>Contact</Link></li>
                            <li><Link to="/careers" className='hover:text-primary'>Careers</Link></li>
                            <li><Link to="/blog" className='hover:text-primary'>Blog</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className='col-span-1'>
                        <h3 className='font-bold text-lg mb-4'>Support</h3>
                        <ul className='space-y-2 text-sm text-muted-foreground'>
                            <li><Link to="/help" className='hover:text-primary'>Help Center</Link></li>
                            <li><Link to="/privacy" className='hover:text-primary'>Privacy Policy</Link></li>
                            <li><Link to="/terms" className='hover:text-primary'>Terms of Service</Link></li>
                            <li>
                                <a href="mailto:support@journeynext.com" className='hover:text-primary'>
                                    support@journeynext.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='mt-12 border-t border-primary/30 pt-8'>
                    <div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
                        <p className='text-sm text-muted-foreground'>
                            © {new Date().getFullYear()} JourneyNext. All rights reserved.
                        </p>
                        <div className='flex space-x-6'>
                            <a href="#" className='text-muted-foreground hover:text-primary'>
                                <span className='sr-only'>Twitter</span>
                                <svg className='h-6 w-6' fill='currentColor' viewBox='0 0 24 24'>
                                    <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84'></path>
                                </svg>
                            </a>
                            <a href="#" className='text-muted-foreground hover:text-primary'>
                                <span className='sr-only'>LinkedIn</span>
                                <svg className='h-6 w-6' fill='currentColor' viewBox='0 0 24 24'>
                                    <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer