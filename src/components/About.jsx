import { useEffect, useRef, useState } from 'react';

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentSection = sectionRef.current;

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-8 px-4 text-center">
      <h2 className={`text-xl md:text-3xl lg:text-4xl mb-4 text-black fade-in-section ${isVisible ? 'is-visible' : ''}`}>
        About Me
      </h2>
      <p className={`text-base md:text-lg max-w-prose mx-auto fade-in-section ${isVisible ? 'is-visible' : ''} transition-delay-200`}
        style={{ transitionDelay: '200ms' }}>
        Hi! i am Zubair Sarki but you can call me Zubi, i am a frontend developer with a strong focus on detail and a passion for creating user-friendly, high-performance, and accessible websites. My expertise lies in HTML, CSS, Tailwind CSS, and JavaScript, and I excel at using React to build exceptional digital experiences. <br /> I create responsive and friendly applications, integrate APIs and turning ideas into user-friendly, maintainable interfaces. When I'm not coding, I enjoy watching movies, anime, playing chess, reading manga and spending time with family and friends.
      </p>
    </section>
  );
}

export default About;