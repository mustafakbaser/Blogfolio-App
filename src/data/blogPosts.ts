import { BlogPost } from '../types/blog';
import { calculateReadingTime } from '../utils/readingTime';

export const blogPosts: BlogPost[] = [
  /* Blog Post 1 */
  {
    id: 1,
    title: 'Guide to Object-Oriented Programming',
    slug: 'guide-to-object-oriented-programming',
    category: 'Software Principles',
    excerpt: 'Object-Oriented Programming (OOP), also known as Object-Oriented Programming, is one of the cornerstones of modern computer systems that we hear very often.',
    content: [
      {
        type: 'text',
        content: 'Object-Oriented Programming (OOP), also known as Object-Oriented Programming, is one of the cornerstones of modern computer systems that we hear very often.',
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=2070',
        alt: 'Car example',
        caption: 'An example of a car object in OOP',
      },
      {
        type: 'code',
        language: 'java',
        content: 'public class Car { String brand; String model; String color; public void start() { System.out.println("Car started."); } }',
      },
      {
        type: 'list',
        ordered: false,
        items: ['Classes', 'Objects', 'Inheritance', 'Encapsulation', 'Polymorphism', 'Abstraction'],
      },
      {
        type: 'alert',
        content: 'I have divided this topic into two parts and discussed classes, objects, attributes, and methods in this article.',
        variant: 'info',
      },
      {
        type: 'quote',
        content: 'The big idea is messaging.',
        author: 'Alan Kay',
        source: 'Dr. Alan Kay on the meaning of “object-oriented programming”',
      },
      {
        type: 'divider',
      },
      {
        type: 'heading',
        content: 'Conclusion',
        level: 2,
      },
      {
        type: 'text',
        content: 'In conclusion, Object-Oriented Programming (OOP) is an indispensable approach in modern software development processes.',
      },
      {
        type: 'link',
        content: 'Object-Oriented Programming | Part 2',
        url: 'https://mustafabaser.net/object-oriented-programming-2',
      },
      {
        type: 'table',
        headers: ['Concept', 'Description'],
        rows: [
          ['Class', 'A blueprint for creating objects'],
          ['Object', 'An instance of a class'],
          ['Inheritance', 'A mechanism for code reuse'],
          ['Encapsulation', 'Bundling data and methods that operate on the data'],
          ['Polymorphism', 'The ability to present the same interface for different data types'],
          ['Abstraction', 'Hiding the complex implementation details and showing only the essential features of the object'],
        ],
        caption: 'Key concepts in OOP',
      },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2070',
    publishedAt: '2024-01-06T11:26:08Z',
    get readTime() {
      return calculateReadingTime(this.content);
    },
  },
  /* Blog Post 2 */
  {
    id: 2,
    title: 'Introduction to Backend Development',
    slug: 'introduction-to-backend-development',
    category: 'Backend',
    excerpt: 'Backend development involves the server-side software that runs in the background of web applications.',
    content: [
      {
        type: 'text',
        content: 'Backend development involves the server-side software that runs in the background of web applications.',
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2070',
        alt: 'Backend example',
        caption: 'An example of a backend server',
      },
      {
        type: 'code',
        language: 'javascript',
        content: 'const express = require("express"); const app = express(); app.get("/", (req, res) => { res.send("Hello World!"); }); app.listen(3000, () => { console.log("Server is running on port 3000"); });',
      },
      {
        type: 'list',
        ordered: true,
        items: ['Server Setup', 'API Development', 'Database Management', 'Security', 'Performance Optimization'],
      },
      {
        type: 'alert',
        content: 'Backend development is crucial for ensuring the security and performance of web applications.',
        variant: 'success',
      },
      {
        type: 'quote',
        content: 'The backend is the backbone of any web application.',
        author: 'Unknown',
      },
      {
        type: 'divider',
      },
      {
        type: 'heading',
        content: 'Conclusion',
        level: 2,
      },
      {
        type: 'text',
        content: 'Backend development involves the server-side software that runs in the background of web applications.',
      },
      {
        type: 'link',
        content: 'Introduction to Backend Development | Part 2',
        url: 'https://mustafabaser.net/introduction-to-backend-development-2',
      },
      {
        type: 'table',
        headers: ['Component', 'Description'],
        rows: [
          ['Server', 'Handles client requests and responses'],
          ['API', 'Provides a way for clients to interact with the server'],
          ['Database', 'Stores and manages data'],
          ['Security', 'Protects the application from threats'],
          ['Performance Optimization', 'Ensures the application runs efficiently'],
        ],
        caption: 'Key components in backend development',
      },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2070',
    publishedAt: '2024-01-07T11:26:08Z',
    get readTime() {
      return calculateReadingTime(this.content);
    },
  },
  /* Blog Post 3 */
  {
    id: 3,
    title: 'Introduction to Frontend Development',
    slug: 'introduction-to-frontend-development',
    category: 'Frontend',
    excerpt: 'Frontend development involves creating the user interface and the visual, interactive part of web applications.',
    content: [
      {
        type: 'text',
        content: 'Frontend development involves creating the user interface and the visual, interactive part of web applications.',
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2070',
        alt: 'Frontend example',
        caption: 'An example of a frontend interface',
      },
      {
        type: 'code',
        language: 'html',
        content: '<!DOCTYPE html><html><head><title>Frontend Example</title></head><body><h1>Hello World!</h1></body></html>',
      },
      {
        type: 'list',
        ordered: true,
        items: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'Frameworks (React, Angular, Vue)'],
      },
      {
        type: 'alert',
        content: 'Frontend development is essential for enhancing user experience.',
        variant: 'success',
      },
      {
        type: 'quote',
        content: 'The user interface is the window through which the world interacts with your code.',
        author: 'Unknown',
      },
      {
        type: 'divider',
      },
      {
        type: 'heading',
        content: 'Conclusion',
        level: 2,
      },
      {
        type: 'text',
        content: 'Frontend development involves creating the user interface and the visual, interactive part of web applications.',
      },
      {
        type: 'link',
        content: 'Introduction to Frontend Development | Part 2',
        url: 'https://mustafabaser.net/introduction-to-frontend-development-2',
      },
      {
        type: 'table',
        headers: ['Technology', 'Description'],
        rows: [
          ['HTML', 'The standard markup language for creating web pages'],
          ['CSS', 'Used for styling web pages'],
          ['JavaScript', 'A programming language for making web pages interactive'],
          ['Responsive Design', 'Ensures web pages look good on all devices'],
          ['Frameworks', 'Provide a foundation for building web applications'],
        ],
        caption: 'Key technologies in frontend development',
      },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    publishedAt: '2024-01-08T11:26:08Z',
    get readTime() {
      return calculateReadingTime(this.content);
    },
  },
  /* Blog Post 4 */
  {
    id: 4,
    title: 'What is DevOps?',
    slug: 'what-is-devops',
    category: 'DevOps',
    excerpt: 'DevOps is an approach that combines software development and operations processes.',
    content: [
      {
        type: 'text',
        content: 'DevOps is an approach that combines software development and operations processes.',
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2070',
        alt: 'DevOps example',
        caption: 'An example of DevOps pipeline',
      },
      {
        type: 'code',
        language: 'yaml',
        content: 'version: "3.8" services: web: image: nginx:alpine ports: - "80:80"',
      },
      {
        type: 'list',
        ordered: true,
        items: ['Continuous Integration (CI)', 'Continuous Deployment (CD)', 'Infrastructure as Code (IaC)', 'Monitoring and Logging', 'Automation'],
      },
      {
        type: 'alert',
        content: 'DevOps is crucial for speeding up the software development process and improving quality.',
        variant: 'success',
      },
      {
        type: 'quote',
        content: 'DevOps is the union of people, process, and products to enable continuous delivery of value to our end users.',
        author: 'Donovan Brown',
      },
      {
        type: 'divider',
      },
      {
        type: 'heading',
        content: 'Conclusion',
        level: 2,
      },
      {
        type: 'text',
        content: 'DevOps is an approach that combines software development and operations processes.',
      },
      {
        type: 'link',
        content: 'What is DevOps? | Part 2',
        url: 'https://mustafabaser.net/what-is-devops-2',
      },
      {
        type: 'table',
        headers: ['Practice', 'Description'],
        rows: [
          ['Continuous Integration', 'Automatically integrates code changes from multiple contributors'],
          ['Continuous Deployment', 'Automatically deploys code changes to production'],
          ['Infrastructure as Code', 'Manages and provisions infrastructure through code'],
          ['Monitoring and Logging', 'Tracks the performance and health of the application'],
          ['Automation', 'Automates repetitive tasks to improve efficiency'],
        ],
        caption: 'Key practices in DevOps',
      },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1554902843-260acd0993f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    publishedAt: '2024-01-09T11:26:08Z',
    get readTime() {
      return calculateReadingTime(this.content);
    },
  },
  /* Blog Post 5 */
  {
    id: 5,
    title: 'Database Management',
    slug: 'database-management',
    category: 'Database',
    excerpt: 'Database management involves the techniques and tools used to store, manage, and query data.',
    content: [
      {
        type: 'text',
        content: 'Database management involves the techniques and tools used to store, manage, and query data.',
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2070',
        alt: 'Database example',
        caption: 'An example of a database schema',
      },
      {
        type: 'code',
        language: 'sql',
        content: 'CREATE TABLE Users ( id INT PRIMARY KEY, name VARCHAR(100), email VARCHAR(100) );',
      },
      {
        type: 'list',
        ordered: true,
        items: ['SQL', 'NoSQL', 'Database Design', 'Indexing', 'Security'],
      },
      {
        type: 'alert',
        content: 'Database management is crucial for ensuring data security and performance.',
        variant: 'success',
      },
      {
        type: 'quote',
        content: 'Data is a precious thing and will last longer than the systems themselves.',
        author: 'Tim Berners-Lee',
      },
      {
        type: 'divider',
      },
      {
        type: 'heading',
        content: 'Conclusion',
        level: 2,
      },
      {
        type: 'text',
        content: 'Database management involves the techniques and tools used to store, manage, and query data.',
      },
      {
        type: 'link',
        content: 'Database Management | Part 2',
        url: 'https://mustafabaser.net/database-management-2',
      },
      {
        type: 'table',
        headers: ['Concept', 'Description'],
        rows: [
          ['SQL', 'Structured Query Language for managing relational databases'],
          ['NoSQL', 'Non-relational databases for handling unstructured data'],
          ['Database Design', 'The process of producing a detailed model of a database'],
          ['Indexing', 'A technique to improve the speed of data retrieval'],
          ['Security', 'Protecting the database from unauthorized access'],
        ],
        caption: 'Key concepts in database management',
      },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1672385503236-b265b253268e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    publishedAt: '2024-01-10T11:26:08Z',
    get readTime() {
      return calculateReadingTime(this.content);
    },
  },
  /* Blog Post 6 */
  {
    id: 6,
    title: 'Microservices Architecture',
    slug: 'microservices-architecture',
    category: 'Backend',
    excerpt: 'Microservices architecture breaks down large applications into small, independent services, providing flexibility and scalability.',
    content: [
      {
        type: 'text',
        content: 'Microservices architecture breaks down large applications into small, independent services, providing flexibility and scalability.',
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2070',
        alt: 'Microservices example',
        caption: 'An example of microservices architecture',
      },
      {
        type: 'code',
        language: 'yaml',
        content: 'version: "3.8" services: user-service: image: user-service:latest ports: - "8080:8080"',
      },
      {
        type: 'list',
        ordered: true,
        items: ['Independent Services', 'API Gateway', 'Service Discovery', 'Monitoring and Logging', 'Automation'],
      },
      {
        type: 'alert',
        content: 'Microservices architecture breaks down large applications into small, independent services, providing flexibility and scalability.',
        variant: 'success',
      },
      {
        type: 'quote',
        content: 'Microservices are small, independent processes that communicate over a network to fulfill a goal.',
        author: 'Sam Newman',
      },
      {
        type: 'divider',
      },
      {
        type: 'heading',
        content: 'Conclusion',
        level: 2,
      },
      {
        type: 'text',
        content: 'Microservices architecture breaks down large applications into small, independent services, providing flexibility and scalability.',
      },
      {
        type: 'link',
        content: 'Microservices Architecture | Part 2',
        url: 'https://mustafabaser.net/microservices-architecture-2',
      },
      {
        type: 'table',
        headers: ['Component', 'Description'],
        rows: [
          ['Independent Services', 'Each service is developed, deployed, and scaled independently'],
          ['API Gateway', 'A single entry point for all client requests'],
          ['Service Discovery', 'Automatically detects available services'],
          ['Monitoring and Logging', 'Tracks the performance and health of each service'],
          ['Automation', 'Automates the deployment and management of services'],
        ],
        caption: 'Key components in microservices architecture',
      },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1672858460787-fb29ed7352f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    publishedAt: '2024-01-11T11:26:08Z',
    get readTime() {
      return calculateReadingTime(this.content);
    },
  },
  /* Blog Post 7 */
  {
    id: 7,
    title: 'Introduction to React Development',
    slug: 'introduction-to-react-development',
    category: 'Frontend',
    excerpt: 'React is a popular JavaScript library used for building user interfaces.',
    content: [
      {
        type: 'text',
        content: 'React is a popular JavaScript library used for building user interfaces.',
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2070',
        alt: 'React example',
        caption: 'An example of a React component',
      },
      {
        type: 'code',
        language: 'javascript',
        content: 'import React from "react"; import ReactDOM from "react-dom"; function App() { return <h1>Hello World!</h1>; } ReactDOM.render(<App />, document.getElementById("root"));',
      },
      {
        type: 'list',
        ordered: true,
        items: ['Components', 'State Management', 'Props', 'Lifecycle Methods', 'Hooks'],
      },
      {
        type: 'alert',
        content: 'React is a popular JavaScript library used for building user interfaces.',
        variant: 'success',
      },
      {
        type: 'quote',
        content: 'React makes it painless to create interactive UIs.',
        author: 'React Documentation',
      },
      {
        type: 'divider',
      },
      {
        type: 'heading',
        content: 'Conclusion',
        level: 2,
      },
      {
        type: 'text',
        content: 'React is a popular JavaScript library used for building user interfaces.',
      },
      {
        type: 'link',
        content: 'Introduction to React Development | Part 2',
        url: 'https://mustafabaser.net/introduction-to-react-development-2',
      },
      {
        type: 'table',
        headers: ['Concept', 'Description'],
        rows: [
          ['Components', 'Reusable pieces of the UI'],
          ['State Management', 'Managing the state of the application'],
          ['Props', 'Passing data from parent to child components'],
          ['Lifecycle Methods', 'Methods that run during different phases of a component’s life'],
          ['Hooks', 'Functions that let you use state and other React features without writing a class'],
        ],
        caption: 'Key concepts in React development',
      },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1570221622224-3bb8f08f166c?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    publishedAt: '2024-01-12T11:26:08Z',
    get readTime() {
      return calculateReadingTime(this.content);
    },
  },
  /* Blog Post 8 */
  {
    id: 8,
    title: 'CI/CD Pipelines',
    slug: 'ci-cd-pipelines',
    category: 'DevOps',
    excerpt: 'CI/CD pipelines automate the continuous integration and continuous deployment processes.',
    content: [
      {
        type: 'text',
        content: 'CI/CD pipelines automate the continuous integration and continuous deployment processes.',
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2070',
        alt: 'CI/CD example',
        caption: 'An example of a CI/CD pipeline',
      },
      {
        type: 'code',
        language: 'yaml',
        content: 'pipeline: stages: - build: script: - echo "Building..." - test: script: - echo "Testing..." - deploy: script: - echo "Deploying..."',
      },
      {
        type: 'list',
        ordered: true,
        items: ['Build', 'Test', 'Deploy', 'Monitoring', 'Rollback'],
      },
      {
        type: 'alert',
        content: 'CI/CD pipelines automate the continuous integration and continuous deployment processes.',
        variant: 'success',
      },
      {
        type: 'quote',
        content: 'CI/CD pipelines enable teams to deliver code changes more frequently and reliably.',
        author: 'Unknown',
      },
      {
        type: 'divider',
      },
      {
        type: 'heading',
        content: 'Conclusion',
        level: 2,
      },
      {
        type: 'text',
        content: 'CI/CD pipelines automate the continuous integration and continuous deployment processes.',
      },
      {
        type: 'link',
        content: 'CI/CD Pipelines | Part 2',
        url: 'https://mustafabaser.net/ci-cd-pipelines-2',
      },
      {
        type: 'table',
        headers: ['Stage', 'Description'],
        rows: [
          ['Build', 'Compiles the code and prepares it for testing'],
          ['Test', 'Runs automated tests to ensure code quality'],
          ['Deploy', 'Deploys the code to a production environment'],
          ['Monitoring', 'Tracks the performance and health of the deployed application'],
          ['Rollback', 'Reverts the deployment if issues are detected'],
        ],
        caption: 'Key stages in CI/CD pipelines',
      },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1703969083653-da62f9ea70af?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    publishedAt: '2024-01-13T11:26:08Z',
    get readTime() {
      return calculateReadingTime(this.content);
    },
  },
  /* Blog Post 9 */
  {
    id: 9,
    title: 'SQL Optimization',
    slug: 'sql-optimization',
    category: 'Database',
    excerpt: 'SQL optimization involves techniques to improve the performance of database queries.',
    content: [
      {
        type: 'text',
        content: 'SQL optimization involves techniques to improve the performance of database queries.',
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2070',
        alt: 'SQL example',
        caption: 'An example of SQL query optimization',
      },
      {
        type: 'code',
        language: 'sql',
        content: 'SELECT * FROM Users WHERE name = "John Doe";',
      },
      {
        type: 'list',
        ordered: true,
        items: ['Indexing', 'Query Planning', 'Join Optimization', 'Cache Usage', 'Partitioning'],
      },
      {
        type: 'alert',
        content: 'SQL optimization involves techniques to improve the performance of database queries.',
        variant: 'success',
      },
      {
        type: 'quote',
        content: 'The goal of SQL optimization is to reduce the time it takes to execute a query.',
        author: 'Unknown',
      },
      {
        type: 'divider',
      },
      {
        type: 'heading',
        content: 'Conclusion',
        level: 2,
      },
      {
        type: 'text',
        content: 'SQL optimization involves techniques to improve the performance of database queries.',
      },
      {
        type: 'link',
        content: 'SQL Optimization | Part 2',
        url: 'https://mustafabaser.net/sql-optimization-2',
      },
      {
        type: 'table',
        headers: ['Technique', 'Description'],
        rows: [
          ['Indexing', 'Creates indexes on columns to speed up data retrieval'],
          ['Query Planning', 'Analyzes and optimizes the execution plan of a query'],
          ['Join Optimization', 'Optimizes the way tables are joined in a query'],
          ['Cache Usage', 'Stores frequently accessed data in memory for faster retrieval'],
          ['Partitioning', 'Divides large tables into smaller, more manageable pieces'],
        ],
        caption: 'Key techniques in SQL optimization',
      },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    publishedAt: '2024-01-14T11:26:08Z',
    get readTime() {
      return calculateReadingTime(this.content);
    },
  },
  /* Blog Post 10 */
  {
    id: 10,
    title: 'Introduction to GraphQL',
    slug: 'introduction-to-graphql',
    category: 'Backend',
    excerpt: 'GraphQL is a flexible and efficient query language and runtime for APIs.',
    content: [
      {
        type: 'text',
        content: 'GraphQL is a flexible and efficient query language and runtime for APIs.',
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2070',
        alt: 'GraphQL example',
        caption: 'An example of a GraphQL query',
      },
      {
        type: 'code',
        language: 'graphql',
        content: 'type Query { hello: String }',
      },
      {
        type: 'list',
        ordered: true,
        items: ['Schema Design', 'Query and Mutation', 'Resolvers', 'Type System', 'Introspection'],
      },
      {
        type: 'alert',
        content: 'GraphQL is a flexible and efficient query language and runtime for APIs.',
        variant: 'success',
      },
      {
        type: 'quote',
        content: 'GraphQL is a query language for your API, and a server-side runtime for executing queries by using a type system you define for your data.',
        author: 'GraphQL Documentation',
      },
      {
        type: 'divider',
      },
      {
        type: 'heading',
        content: 'Conclusion',
        level: 2,
      },
      {
        type: 'text',
        content: 'GraphQL is a flexible and efficient query language and runtime for APIs.',
      },
      {
        type: 'link',
        content: 'Introduction to GraphQL | Part 2',
        url: 'https://mustafabaser.net/introduction-to-graphql-2',
      },
      {
        type: 'table',
        headers: ['Concept', 'Description'],
        rows: [
          ['Schema Design', 'Defines the structure of the data and the queries'],
          ['Query and Mutation', 'Operations to fetch and modify data'],
          ['Resolvers', 'Functions that resolve the data for a single field in your schema'],
          ['Type System', 'Defines the types of data and their relationships'],
          ['Introspection', 'Allows clients to query the schema for information about the types and queries'],
        ],
        caption: 'Key concepts in GraphQL',
      },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1687603917313-ccae1a289a9d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    publishedAt: '2024-01-15T11:26:08Z',
    get readTime() {
      return calculateReadingTime(this.content);
    },
  },
  /* Blog Post 11 */
  {
    id: 11,
    title: 'Introduction to Vue.js Development',
    slug: 'introduction-to-vuejs-development',
    category: 'Frontend',
    excerpt: 'Vue.js is a popular JavaScript framework used for building user interfaces.',
    content: [
      {
        type: 'text',
        content: 'Vue.js is a popular JavaScript framework used for building user interfaces.',
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2070',
        alt: 'Vue.js example',
        caption: 'An example of a Vue.js component',
      },
      {
        type: 'code',
        language: 'javascript',
        content: 'new Vue({ el: "#app", data: { message: "Hello Vue!" } });',
      },
      {
        type: 'list',
        ordered: true,
        items: ['Components', 'State Management', 'Props', 'Lifecycle Methods', 'Directives'],
      },
      {
        type: 'alert',
        content: 'Vue.js is a popular JavaScript framework used for building user interfaces.',
        variant: 'success',
      },
      {
        type: 'quote',
        content: 'Vue.js is a progressive framework for building user interfaces.',
        author: 'Vue.js Documentation',
      },
      {
        type: 'divider',
      },
      {
        type: 'heading',
        content: 'Conclusion',
        level: 2,
      },
      {
        type: 'text',
        content: 'Vue.js is a popular JavaScript framework used for building user interfaces.',
      },
      {
        type: 'link',
        content: 'Introduction to Vue.js Development | Part 2',
        url: 'https://mustafabaser.net/introduction-to-vuejs-development-2',
      },
      {
        type: 'table',
        headers: ['Concept', 'Description'],
        rows: [
          ['Components', 'Reusable pieces of the UI'],
          ['State Management', 'Managing the state of the application'],
          ['Props', 'Passing data from parent to child components'],
          ['Lifecycle Methods', 'Methods that run during different phases of a component’s life'],
          ['Directives', 'Special tokens in the markup that tell the library to do something to a DOM element'],
        ],
        caption: 'Key concepts in Vue.js development',
      },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    publishedAt: '2024-01-16T11:26:08Z',
    get readTime() {
      return calculateReadingTime(this.content);
    },
  },
  /* Blog Post 12 */
  {
    id: 12,
    title: 'Introduction to Kubernetes',
    slug: 'introduction-to-kubernetes',
    category: 'DevOps',
    excerpt: 'Kubernetes is an open-source platform for container orchestration.',
    content: [
      {
        type: 'text',
        content: 'Kubernetes is an open-source platform for container orchestration.',
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2070',
        alt: 'Kubernetes example',
        caption: 'An example of a Kubernetes cluster',
      },
      {
        type: 'code',
        language: 'yaml',
        content: 'apiVersion: v1 kind: Pod metadata: name: mypod spec: containers: - name: mycontainer image: nginx',
      },
      {
        type: 'list',
        ordered: true,
        items: ['Pods', 'Services', 'Deployments', 'ReplicaSets', 'ConfigMaps'],
      },
      {
        type: 'alert',
        content: 'Kubernetes is an open-source platform for container orchestration.',
        variant: 'success',
      },
      {
        type: 'quote',
        content: 'Kubernetes is an open-source system for automating deployment, scaling, and operations of application containers across clusters of hosts.',
        author: 'Kubernetes Documentation',
      },
      {
        type: 'divider',
      },
      {
        type: 'heading',
        content: 'Conclusion',
        level: 2,
      },
      {
        type: 'text',
        content: 'Kubernetes is an open-source platform for container orchestration.',
      },
      {
        type: 'link',
        content: 'Introduction to Kubernetes | Part 2',
        url: 'https://mustafabaser.net/introduction-to-kubernetes-2',
      },
      {
        type: 'table',
        headers: ['Component', 'Description'],
        rows: [
          ['Pods', 'The smallest and simplest Kubernetes object'],
          ['Services', 'An abstraction which defines a logical set of Pods and a policy by which to access them'],
          ['Deployments', 'Provide declarative updates to applications'],
          ['ReplicaSets', 'Ensure a specified number of pod replicas are running at any given time'],
          ['ConfigMaps', 'Store configuration data that can be passed to containers'],
        ],
        caption: 'Key components in Kubernetes',
      },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1654618977232-a6c6dea9d1e8?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    publishedAt: '2024-01-17T11:26:08Z',
    get readTime() {
      return calculateReadingTime(this.content);
    },
  },
];