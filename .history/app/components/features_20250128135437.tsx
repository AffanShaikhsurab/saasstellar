import React from 'react'
import {
    BrainCircuitIcon,
    GraduationCapIcon,
    LayoutDashboardIcon,
    LineChartIcon,
    PersonStandingIcon,
    SparklesIcon,
} from 'lucide-react'
import { type FeatureCardProps } from '~/types/feature-card'
import FeatureCard from './feature-card'

const featuresData: FeatureCardProps[] = [
    {
        title: 'AI-Powered Personalization',
        description:
            'Custom learning paths tailored to your goals, experience level, and preferred learning style.',
        icon: <BrainCircuitIcon size={28} className='text-blue-500' />,
        backgroundColor: 'from-blue-500/20 to-blue-500/5',
    },
    {
        title: 'Adaptive Learning',
        description: 'Content that evolves with your progress and automatically adjusts to your pace.',
        icon: <SparklesIcon size={28} className='text-green-500' />,
        backgroundColor: 'from-green-500/20 to-green-500/5',
    },
    {
        title: 'Interactive Experience',
        description: 'Engage with hands-on exercises, quizzes, and real-world projects.',
        icon: <PersonStandingIcon size={28} className='text-yellow-500' />,
        backgroundColor: 'from-yellow-500/20 to-yellow-500/5',
    },
    {
        title: 'Progress Tracking',
        description:
            'Detailed analytics and insights to monitor your learning journey and achievements.',
        icon: <LineChartIcon className='text-red-500' />,
        backgroundColor: 'from-red-500/20 to-red-500/5',
    },
    {
        title: 'Comprehensive Dashboard',
        description:
            'All your learning materials, progress, and recommendations in one place.',
        icon: <LayoutDashboardIcon className='text-pink-500' />,
        backgroundColor: 'from-pink-500/20 to-pink-500/5',
    },
    {
        title: 'Certification Path',
        description: 'Earn certificates as you complete courses and achieve your learning goals.',
        icon: <GraduationCapIcon size={28} className='text-purple-500' />,
        backgroundColor: 'from-purple-500/20 to-purple-500/5',
    },
]

const Features = () => {
    return (
        <section className='mx-auto mt-48 max-w-7xl px-5'>
            <div className='mx-auto flex max-w-2xl flex-col gap-6 text-center'>
                <div>
                    <span className='rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary dark:bg-primary/25'>
                        <span className='brightness-[1.7]'>
                            Platform Features
                        </span>
                    </span>
                    <h1 className='mt-4 scroll-m-20 font-inter text-4xl font-extrabold tracking-tight lg:text-5xl'>
                        <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                            Advanced{' '}
                        </span>
                        <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                            Learning{' '}
                        </span>
                        <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                            Powered{' '}
                        </span>
                        <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                            by{' '}
                        </span>
                        <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                            AI
                        </span>
                    </h1>
                </div>
                <p className='text-lg text-muted-foreground'>
                    <span className='hidden lg:block'>
                        Experience a revolutionary learning platform that adapts to your unique needs, 
                        delivering personalized content and tracking your progress every step of the way.
                    </span>
                    <span className='block lg:hidden'>
                        Experience personalized learning that adapts to your unique needs and goals.
                    </span>
                </p>
            </div>
            <div>
                <ul className='mt-20 grid place-content-center gap-20 md:grid-cols-2 lg:grid-cols-3'>
                    {featuresData.map((feature, i) => (
                        <li key={i}>
                            <FeatureCard
                                title={feature.title}
                                description={feature.description}
                                backgroundColor={feature.backgroundColor}
                                icon={feature.icon}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Features