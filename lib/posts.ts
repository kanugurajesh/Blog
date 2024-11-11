export const posts = [
  {
    id: 1,
    title: "Understanding Modern Web Development",
    excerpt: "Explore the latest trends and best practices in modern web development, from React to Next.js and beyond.",
    content: `Modern web development has evolved significantly over the past decade. With the advent of powerful frameworks and tools, developers now have more capabilities than ever before.

## The Rise of React and Next.js

React has revolutionized how we build user interfaces, introducing a component-based architecture that makes our code more maintainable and reusable. Next.js takes this further by providing an opinionated framework that handles routing, server-side rendering, and more out of the box.

## Key Concepts

1. **Component-Based Architecture**
   - Reusable building blocks
   - Encapsulated functionality
   - Better maintenance and testing

2. **Server-Side Rendering**
   - Improved performance
   - Better SEO
   - Enhanced user experience

3. **Static Site Generation**
   - Faster page loads
   - Reduced server costs
   - Improved reliability

## Best Practices

- Write clean, maintainable code
- Follow established design patterns
- Implement proper error handling
- Optimize for performance
- Consider accessibility from the start

Modern web development is an exciting field that continues to evolve. Staying updated with the latest trends and best practices is crucial for building successful applications.`,
    author: {
      name: "Sarah Chen",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      initials: "SC"
    },
    date: "Apr 1, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800"
  },
  {
    id: 2,
    title: "The Future of Artificial Intelligence",
    excerpt: "Discover how AI is transforming the technology landscape and what it means for developers and businesses.",
    content: `Artificial Intelligence is reshaping the technology landscape at an unprecedented pace. From machine learning to neural networks, AI is becoming increasingly sophisticated and accessible.

## The Impact of AI

AI is transforming various industries, from healthcare to finance. Its applications are becoming more diverse and impactful, offering solutions to complex problems.

## Key Technologies

1. **Machine Learning**
   - Supervised Learning
   - Unsupervised Learning
   - Reinforcement Learning

2. **Neural Networks**
   - Deep Learning
   - Convolutional Networks
   - Recurrent Networks

## Future Prospects

The future of AI holds immense potential. As technology advances, we'll see more innovative applications and solutions emerging.`,
    author: {
      name: "Michael Park",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      initials: "MP"
    },
    date: "Mar 30, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800"
  },
  {
    id: 3,
    title: "Building Scalable Applications",
    excerpt: "Learn the architectural patterns and practices that help you build applications that can grow with your needs.",
    content: `Building scalable applications requires careful planning and the right architectural decisions. Learn how to create systems that can handle growth effectively.

## Scalability Principles

Understanding core scalability principles is crucial for building robust applications that can handle increased load and complexity.

## Key Strategies

1. **Horizontal Scaling**
   - Load Balancing
   - Distributed Systems
   - Microservices

2. **Vertical Scaling**
   - Resource Optimization
   - Performance Tuning
   - Caching Strategies

## Best Practices

Follow industry-proven practices to ensure your applications can scale efficiently and reliably.`,
    author: {
      name: "Emma Wilson",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
      initials: "EW"
    },
    date: "Mar 28, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
  }
] as const;

export type Post = (typeof posts)[number];