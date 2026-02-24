import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectsService {
  private projects = [
    {
      id: 1,
      title: 'Portfolio Fullstack',
      description: 'Portafolio profesional con Next.js y NestJS',
      stack: ['Next.js', 'NestJS', 'PostgreSQL'],
      featured: true,
    },
    {
      id: 2,
      title: 'API REST Auth',
      description: 'Sistema de autenticación con JWT',
      stack: ['NestJS', 'JWT', 'PostgreSQL'],
      featured: false,
    },
  ];

  findAll() {
    return this.projects;
  }

  findFeatured() {
    return this.projects.filter((project) => project.featured);
  }
}
