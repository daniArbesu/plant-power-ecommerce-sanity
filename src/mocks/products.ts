import type { Product } from '@/types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Creatine',
    image:
      'https://cdn.prod.website-files.com/6477f67e51f80b0cd8ee2e72/655cc169cee1e3d9beee4b93_Creatine%40web-p-500.png',
    description: 'Creatina monoidratada de alta pureza.',
    featured: true,
    doses: 100,
  },
  {
    id: 2,
    name: 'The one',
    image:
      'https://cdn.prod.website-files.com/6477f67e51f80b0cd8ee2e72/655cbf929f7c850fbca4eefa_The-One%40web-p-500.png',
    description: 'Suplemento integral à base de concentrado de vegetais e frutas.',
    featured: true,
    doses: 30,
  },
  {
    id: 3,
    name: 'Defense',
    image:
      'https://cdn.prod.website-files.com/6477f67e51f80b0cd8ee2e72/655cc0a1568091a34ff1532c_Defense%40web-p-500.png',
    description: 'Suplemento natural para reforço da imunidade.',
    featured: true,
    doses: 30,
  },
  {
    id: 4,
    name: 'Nitro400',
    image:
      'https://cdn.prod.website-files.com/6477f67e51f80b0cd8ee2e72/655cc169cee1e3d9beee4b93_Creatine%40web.png',
    description: 'Beterraba concentrada, Ferro e Vitaminas do complexo B.',
    featured: false,
    doses: 30,
  },
  {
    id: 5,
    name: 'Omega 3',
    image:
      'https://cdn.prod.website-files.com/6477f67e51f80b0cd8ee2e72/655cc169cee1e3d9beee4b93_Creatine%40web.png',
    description: 'Ácidos graxos essenciais.',
    featured: false,
    doses: 60,
  },
  {
    id: 6,
    name: 'Pre-Workout',
    image:
      'https://cdn.prod.website-files.com/6477f67e51f80b0cd8ee2e72/655cc169cee1e3d9beee4b93_Creatine%40web.png',
    description: 'Pré-treino energético.',
    featured: false,
    doses: 30,
  },
];
