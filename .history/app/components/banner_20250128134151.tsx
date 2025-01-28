import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { useForm } from '@formspree/react'
import { Loader2Icon, Brain, Sparkles } from 'lucide-react'
import { cn } from '~/lib/utils'
import useTheme from '~/hooks/use-theme'

const Banner = () => {
    const [state, handleSubmit] = useForm('mjvqrzpz')
    const [theme] = useTheme()

    return (
        <section className='relative mt-48 flex flex-col items-center justify-between gap-10 bg-gradient-to-br from-primary/20 via-transparent to-primary/20'>
            <div className='h-[1px] w-full bg-gradient-to-r from-primary to-transparent'></div>
            <div className='relative w-full max-w-7xl px-5'>
                <div className='flex justify-between'>
                    <div className='mx-auto flex max-w-2xl flex-col gap-6 lg:mx-0'>
                        <div>
                            <h1 className='mt-4 scroll-m-20 text-center font-inter text-4xl font-extrabold tracking-tight lg:text-left lg:text-5xl'>
                                <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                                    Transform{' '}
                                </span>
                                <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                                    your{' '}
                                </span>
                                <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                                    learning{' '}
                                </span>
                                <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                                    journey{' '}
                                </span>
                                <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                                    with{' '}
                                </span>
                                <span className='bg-gradient-to-b from-primary to-primary/70 bg-clip-text text-transparent'>
                                    AI
                                </span>
                            </h1>
                        </div>
                        <p className='text-center text-lg text-muted-foreground lg:text-left'>
                            Experience personalized learning paths tailored to your goals, preferences, and learning style. Let AI guide your educational journey.
                        </p>
                        <form
                            onSubmit={handleSubmit}
                            className='mx-auto flex w-full max-w-md flex-col items-end gap-2 lg:mx-0 lg:flex-row'
                        >
                            <div className='flex w-full max-w-sm basis-2/3 flex-col items-start gap-1.5'>
                                <Label
                                    className='text-left text-muted-foreground'
                                    htmlFor='email-banner'
                                >
                                    Start your learning journey today
                                </Label>
                                <Input
                                    name='email-banner'
                                    required
                                    id='email-banner'
                                    type='email'
                                    placeholder='you@example.com'
                                />
                            </div>

                            {!state.succeeded && (
                                <Button
                                    type='submit'
                                    className='w-full max-w-sm lg:w-fit'
                                    disabled={state.submitting}
                                >
                                    {state.submitting && (
                                        <Loader2Icon className='mr-2 h-4 w-4 animate-spin' />
                                    )}
                                    {state.submitting ? 'Creating Account' : 'Start Learning'}
                                </Button>
                            )}
                            {state.succeeded && (
                                <Button
                                    variant={'secondary'}
                                    className='pointer-events-none w-full max-w-sm lg:w-fit'
                                >
                                    Welcome aboard! ✨
                                </Button>
                            )}
                        </form>
                    </div>
                    <div className='absolute -bottom-10 right-5 hidden lg:block'>
                        <div className='relative'>
                            <Brain 
                                size={48} 
                                className={cn(
                                    'text-primary',
                                    'animate-pulse'
                                )} 
                            />
                            <Sparkles 
                                size={24} 
                                className={cn(
                                    'absolute -right-2 -top-2',
                                    'text-primary',
                                    'animate-bounce'
                                )} 
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-[1px] w-full bg-gradient-to-l from-primary to-transparent'></div>
        </section>
    )
}

export default Banner