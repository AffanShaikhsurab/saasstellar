import { useForm } from '@formspree/react';
import { motion } from 'framer-motion';
import { Loader2Icon, MoveRightIcon } from 'lucide-react';
import { cn } from '~/lib/utils';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import useTheme from '~/hooks/use-theme';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Hero = () => {
    const [state, handleSubmit] = useForm('mjvqrzpz');
    const [theme] = useTheme();
    const containerRef = useRef<HTMLDivElement | null>(null); // Explicitly define the type

    useEffect(() => {
        if (!containerRef.current) return;

        // Three.js setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        containerRef.current.appendChild(renderer.domElement); // Use appendChild instead of append

        // Create floating particles
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 2000;
        const posArray = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 5;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.005,
            color:  '#ffffff' ,
            transparent: true,
            opacity: 0.5,
        });

        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);
        camera.position.z = 3;

        // Animation
        const animate = () => {
            requestAnimationFrame(animate);
            particlesMesh.rotation.y += 0.001;
            particlesMesh.rotation.x += 0.001;
            renderer.render(scene, camera);
        };

        animate();

        // Handle resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (containerRef.current) {
                containerRef.current.removeChild(renderer.domElement); // Use removeChild
            }
        };
    }, [theme]);

    return (
        <div className="relative">
            <div ref={containerRef} className="absolute inset-0 -z-10" />
            <main className="mx-auto my-10 flex min-h-[calc(100vh-73px)] max-w-2xl flex-col justify-center gap-6 px-5 text-center lg:my-0">
                <motion.h1
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className={cn(
                        'scroll-m-20 font-inter text-4xl font-extrabold tracking-tight lg:text-5xl'
                    )}
                >
                    <span className="bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
                        Transform Your
                    </span>{' '}
                    <span className="bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
                        Learning{' '}
                    </span>
                    <span
                        className={cn(
                            'relative bg-gradient-to-r from-primary bg-clip-text text-5xl font-extrabold text-transparent lg:text-8xl',
                            theme === 'blue' && 'to-purple-600'
                        )}
                    >
                        Journey.
                    </span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
                    className="text-base text-muted-foreground lg:text-lg"
                >
                    Welcome to <span className="text-primary">JourneyNext</span>,
                    where AI-powered personalized learning paths meet your unique goals and preferences.{' '}
                    <span className="hidden lg:block">
                        Start your customized learning adventure today.
                    </span>
                </motion.p>
                <motion.form
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
                    onSubmit={handleSubmit}
                    className="mx-auto mt-8 flex w-full max-w-sm flex-col items-end space-y-2"
                >
                    <div className="flex w-full max-w-sm flex-col items-start gap-1.5">
                        <Label
                            className="text-left text-muted-foreground"
                            htmlFor="email"
                        >
                            Start your personalized learning journey
                        </Label>
                        <Input
                            required
                            type="email"
                            id="email"
                            placeholder="your.email@example.com"
                            name="email"
                        />
                    </div>
                    {!state.succeeded && (
                        <Button
                            className={cn(
                                'flex w-full justify-between',
                                state.submitting && 'justify-center'
                            )}
                            type="submit"
                            disabled={state.submitting}
                        >
                            {state.submitting && (
                                <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
                            )}
                            {state.submitting && 'Creating your journey'}
                            {!state.submitting && 'Begin Your Learning Journey'}
                            {!state.submitting && (
                                <MoveRightIcon className="h-4 w-4" />
                            )}
                        </Button>
                    )}
                    {state.succeeded && (
                        <Button
                            variant={'secondary'}
                            className="pointer-events-none w-full"
                        >
                            Welcome to JourneyNext! 🎓
                        </Button>
                    )}
                    {!state.succeeded && (
                        <p className="w-full text-center text-sm text-muted-foreground">
                            Join our community of lifelong learners!
                        </p>
                    )}
                    {state.succeeded && (
                        <p className="w-full text-center text-sm text-muted-foreground">
                            Get ready for a personalized learning experience!
                        </p>
                    )}
                </motion.form>
            </main>
        </div>
    );
};

export default Hero;