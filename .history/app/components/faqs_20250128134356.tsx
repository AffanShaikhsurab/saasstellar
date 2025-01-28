import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '~/components/ui/accordion'
import ChatMessage from './icons/chat-message'
import DotPattern from './dot-pattern'
import { cn } from '~/lib/utils'
import { buttonVariants } from './ui/button'

const faqs = [
    {
        question: 'How does JourneyNext personalize my learning experience?',
        answer: 'JourneyNext uses AI to create customized learning paths based on your preferences, experience level, and goals. The platform adapts to your learning style (visual, hands-on, or reading), adjusts content difficulty based on your progress, and provides personalized recommendations for optimal learning outcomes.',
    },
    {
        question: 'Can I change my learning preferences or goals after starting a course?',
        answer: 'Yes, you can adjust your learning preferences, goals, and content type preferences at any time. Our AI system will automatically adapt your learning path to reflect these changes, ensuring your learning experience remains aligned with your evolving needs.',
    },
    {
        question: 'How does the progress tracking and assessment work?',
        answer: 'JourneyNext continuously tracks your progress through interactive quizzes, completion rates, and engagement metrics. The AI analyzes your performance to adjust content difficulty and provides targeted recommendations for areas that need more focus. You can view your progress dashboard and earn certificates upon course completion.',
    },
    {
        question: 'What types of content and learning materials are available?',
        answer: 'JourneyNext offers a diverse range of content including video tutorials, interactive coding exercises, reading materials, and hands-on projects. The platform prioritizes content types based on your preferred learning style while ensuring comprehensive coverage of your chosen subject area.',
    },
]

const FAQs = () => {
    return (
        <section className='relative mx-auto px-5 pb-8 pt-48'>
            <div className='mx-auto flex max-w-7xl flex-col gap-6 text-center'>
                <div>
                    <span className='rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary dark:bg-primary/25'>
                        <span className='brightness-[1.7]'>FAQs</span>
                    </span>
                    <h1 className='mt-4 scroll-m-20 font-inter text-4xl font-extrabold tracking-tight lg:text-5xl'>
                        <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                            Common questions about{' '}
                        </span>
                        <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                            personalized learning
                        </span>
                    </h1>
                </div>
                <p className='text-lg text-muted-foreground'>
                    Want to learn more about how JourneyNext can help you?{' '}
                    <a
                        href='#contact'
                        className={cn(
                            buttonVariants({ variant: 'link' }),
                            'px-0 text-lg text-foreground'
                        )}
                    >
                        Get in touch with our team.
                    </a>
                </p>
                <div className='mt-20 flex items-center justify-between'>
                    <DotPattern
                        width={20}
                        height={20}
                        cx={1}
                        cy={1}
                        cr={1}
                        className={cn(
                            'fill-primary/40 [mask-image:linear-gradient(to_bottom,transparent,white,white,transparent,transparent)]'
                        )}
                    />
                    <Accordion
                        collapsible
                        type='single'
                        className='mx-auto w-full max-w-4xl grow basis-28 text-left'
                    >
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className='text-left text-xl hover:no-underline'>
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className='text-base text-muted-foreground'>
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}

export default FAQs