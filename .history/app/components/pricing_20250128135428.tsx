import { CheckIcon } from 'lucide-react'
import { Button } from './ui/button'
import { Switch } from './ui/switch'
import { Label } from './ui/label'
import { useState } from 'react'
import { cn } from '~/lib/utils'
import { Badge } from './ui/badge'

const Pricing = () => {
    const [checked, setChecked] = useState(false)

    return (
        <section className='mx-auto mb-8 mt-48 px-5 dark:bg-[radial-gradient(ellipse_40%_50%_at_50%_-20%,hsla(var(--primary)_/_30%),#ffffff00)]'>
            <div className='mx-auto mb-16 h-[1px] w-full max-w-2xl bg-gradient-to-r from-transparent via-primary to-transparent'></div>
            <div className='mx-auto flex max-w-7xl flex-col gap-6 text-center'>
                <div>
                    <span className='rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary dark:bg-primary/25'>
                        <span className='brightness-[1.7]'>
                            Flexible Learning Plans
                        </span>
                    </span>
                    <h1 className='mt-4 scroll-m-20 font-inter text-4xl font-extrabold tracking-tight lg:text-5xl'>
                        <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                            Start{' '}
                        </span>
                        <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                            Your{' '}
                        </span>
                        <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                            Learning{' '}
                        </span>
                        <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                            Journey
                        </span>
                    </h1>
                </div>
                <p className='text-lg text-muted-foreground'>
                    Choose the perfect plan for your learning goals
                </p>
                <div className='mt-20 flex items-center justify-center space-x-2'>
                    <Label
                        htmlFor='price-toggle'
                        className={cn(checked && 'text-muted-foreground')}
                    >
                        Monthly
                    </Label>
                    <Switch
                        id='price-toggle'
                        defaultChecked={false}
                        checked={checked}
                        onCheckedChange={() => setChecked(!checked)}
                        className='data-[state=unchecked]:bg-primary'
                        aria-label='toggle pricing'
                    />
                    <Label
                        htmlFor='price-toggle'
                        className={cn(!checked && 'text-muted-foreground')}
                    >
                        Annually
                    </Label>
                </div>
                <div className='mt-10 flex flex-col items-center gap-6 lg:flex-row lg:items-stretch lg:justify-around lg:px-6'>
                    <div className='gradient-border relative w-full max-w-sm flex-grow basis-0 rounded-md bg-gradient-to-bl from-primary/10 via-transparent to-transparent p-8 text-left before:bg-gradient-to-bl before:from-primary/30 before:to-primary/5 lg:max-w-none'>
                        <div className='flex flex-col gap-3 text-left'>
                            <p>Explorer</p>
                            <div className='flex items-start gap-2'>
                                <span className='text-2xl text-muted-foreground'>
                                    $
                                </span>
                                <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-5xl font-medium text-transparent'>
                                    0
                                </span>
                            </div>
                            <p className='text-muted-foreground'>
                                Perfect for trying out personalized learning
                            </p>
                        </div>
                        <ul className='mt-8 flex flex-col gap-4'>
                            <li className='flex gap-2'>
                                <CheckIcon className='mt-0.5 h-5 w-5 shrink-0 text-primary' />
                                <span>Access to basic courses</span>
                            </li>
                            <li className='flex gap-2'>
                                <CheckIcon className='mt-0.5 h-5 w-5 shrink-0 text-primary' />
                                <span>Basic AI recommendations</span>
                            </li>
                            <li className='flex gap-2'>
                                <CheckIcon className='mt-0.5 h-5 w-5 shrink-0 text-primary' />
                                <span>Learning style assessment</span>
                            </li>
                            <li className='flex gap-2'>
                                <CheckIcon className='mt-0.5 h-5 w-5 shrink-0 text-primary' />
                                <span>Progress tracking</span>
                            </li>
                            <li className='flex gap-2'>
                                <CheckIcon className='mt-0.5 h-5 w-5 shrink-0 text-primary' />
                                <span>Community support</span>
                            </li>
                            <li className='flex gap-2'>
                                <CheckIcon className='mt-0.5 h-5 w-5 shrink-0 text-primary' />
                                <span>Basic course completion certificates</span>
                            </li>
                        </ul>
                        <Button className='mt-8 w-full' variant={'outline'}>
                            Start Learning
                        </Button>
                    </div>
                    <div className='gradient-border relative w-full max-w-sm flex-grow basis-0 rounded-md bg-gradient-to-b from-primary/10 via-transparent to-transparent p-8 before:bg-gradient-to-b before:from-primary before:to-primary/10 lg:max-w-none'>
                        <div className='flex flex-col gap-3 text-left'>
                            <p>Pro Learner</p>
                            <div className='flex items-start gap-2'>
                                <span className='text-2xl text-muted-foreground'>
                                    $
                                </span>
                                <span className='flex items-center gap-2 bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-5xl font-medium text-transparent'>
                                    {checked ? '199' : '19'}
                                    {checked && (
                                        <Badge variant={'outline'}>
                                            SAVE 15%
                                        </Badge>
                                    )}
                                </span>
                            </div>
                            <p className='text-muted-foreground'>
                                For dedicated learners seeking growth
                            </p>
                        </div>
                        <ul className='mt-8 flex flex-col gap-4 text-left'>
                            <li className='flex gap-2'>
                                <CheckIcon className='mt-0.5 h-5 w-5 shrink-0 text-primary' />
                                <span>All Explorer features</span>
                            </li>
                            <li className='flex gap-2'>
                                <CheckIcon className='mt-0.5 h-5 w-5 shrink-0 text-primary' />
                                <span>Advanced AI-powered recommendations</span>
                            </li>
                            <li className='flex gap-2'>
                                <CheckIcon className='mt-0.5 h-5 w-5 shrink-0 text-primary' />
                                <span>Unlimited premium courses</span>
                            </li>
                            <li className='flex gap-2'>
                                <CheckIcon className='mt-0.5 h-5 w-5 shrink-0 text-primary' />
                                <span>Interactive practice sessions</span>
                            </li>
                            <li className='flex gap-2'>
                                <CheckIcon className='mt-0.5 h-5 w-5 shrink-0 text-primary' />
                                <span>Priority support</span>
                            </li>
                            <li className='flex gap-2'>
                                <CheckIcon className='mt-0.5 h-5 w-5 shrink-0 text-primary' />
                                <span>Verified certificates</span>
                            </li>
                        </ul>
                        <Button className='mt-8 w-full'>Upgrade now</Button>
                    </div>
                    <div className='gradient-border relative max-w-sm flex-grow basis-0 rounded-md bg-gradient-to-br from-primary/10 via-transparent to-transparent p-8 before:bg-gradient-to-br before:from-primary/30 before:to-primary/5 lg:max-w-none'>
                        <div className='flex flex-col gap-3 text-left'>
                            <p>Master</p>
                            <div className='flex items-start gap-2'>
                                <span className='text-2xl text-muted-foreground'>
                                    $
                                </span>
                                <span className='flex items-center gap-2 bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-5xl font-medium text-transparent'>
                                    {checked ? '499' : '49'}
                                    {checked && (
                                        <Badge variant={'outline'}>
                                            SAVE 15%
                                        </Badge>
                                    )}
                                </span>
                            </div>
                            <p className='text-muted-foreground'>
                                Ultimate learning experience for professionals
                            </p>
                        </div>
                        <ul className='mt-8 flex flex-col gap-4 text-left'>
                            <li className='flex gap-2'>
                                <CheckIcon className='mt-0.5 h-5 w-5 shrink-0 text-primary' />
                                <span>All Pro Learner features</span>
                            </li>
                            <li className='flex gap-2'>
                                <CheckIcon className='mt-0.5 h-5 w-5 shrink-0 text-primary' />
                                <span>1-on-1 learning guidance</span>
                            </li>
                            <li className='flex gap-2'>
                                <CheckIcon className='mt-0.5 h-5 w-5 shrink-0 text-primary' />
                                <span>Custom learning paths</span>
                            </li>
                            <li className='flex gap-2'>
                                <CheckIcon className='mt-0.5 h-5 w-5 shrink-0 text-primary' />
                                <span>Career coaching sessions</span>
                            </li>
                            <li className='flex gap-2'>
                                <CheckIcon className='mt-0.5 h-5 w-5 shrink-0 text-primary' />
                                <span>24/7 dedicated support</span>
                            </li>
                            <li className='flex gap-2'>
                                <CheckIcon className='mt-0.5 h-5 w-5 shrink-0 text-primary' />
                                <span>Industry-recognized certifications</span>
                            </li>
                        </ul>
                        <Button className='mt-8 w-full' variant={'outline'}>
                            Get Started
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing