export interface BookType {
  id: string;
  title: string;
  author: string;
  coverUrl: string;
  link: string;
  readUrl?: string; // Optional URL for books that can be read online
}

export interface CatalogType {
  id: string;
  name: string;
  books: BookType[];
}

export const catalogs: CatalogType[] = [
  {
    id: 'health',
    name: 'Health',
    books: [
      {
        id: 'health-1',
        title: 'The Power of Nutrition',
        author: 'Dr. Sarah Johnson',
        coverUrl: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061',
        link: 'https://www.gutenberg.org/ebooks/15237',
        readUrl: 'https://www.gutenberg.org/files/15237/15237-h/15237-h.htm'
      },
      {
        id: 'health-2',
        title: 'Mind and Body Connection',
        author: 'Michael Chen',
        coverUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b',
        link: 'https://www.gutenberg.org/ebooks/10800'
      },
      {
        id: 'health-3',
        title: 'Holistic Wellness Guide',
        author: 'Emma Wilson',
        coverUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773',
        link: 'https://www.gutenberg.org/ebooks/56667'
      },
      {
        id: 'health-4',
        title: 'Sleep Revolution',
        author: 'Dr. James Smith',
        coverUrl: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55',
        link: 'https://www.gutenberg.org/ebooks/41958'
      },
      {
        id: 'health-5',
        title: 'Mindful Living',
        author: 'Lisa Brown',
        coverUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773',
        link: 'https://www.gutenberg.org/ebooks/67098'
      }
    ]
  },
  {
    id: 'sports',
    name: 'Sports',
    books: [
      {
        id: 'sports-1',
        title: 'The Art of Running',
        author: 'Tom Parker',
        coverUrl: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211',
        link: 'https://www.gutenberg.org/ebooks/14121',
        readUrl: 'https://www.gutenberg.org/files/14121/14121-h/14121-h.htm'
      },
      {
        id: 'sports-2',
        title: 'Basketball Fundamentals',
        author: 'Coach Williams',
        coverUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc',
        link: 'https://www.gutenberg.org/ebooks/29378'
      },
      {
        id: 'sports-3',
        title: 'Soccer Tactics',
        author: 'Carlos Rodriguez',
        coverUrl: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55',
        link: 'https://www.gutenberg.org/ebooks/28159'
      },
      {
        id: 'sports-4',
        title: 'Swimming Mastery',
        author: 'Anna Lee',
        coverUrl: 'https://images.unsplash.com/photo-1530549387789-4c1017266635',
        link: 'https://www.gutenberg.org/ebooks/31557'
      },
      {
        id: 'sports-5',
        title: 'Tennis Excellence',
        author: 'Peter White',
        coverUrl: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8',
        link: 'https://www.gutenberg.org/ebooks/26254'
      }
    ]
  },
  {
    id: 'farming',
    name: 'Farming',
    books: [
      {
        id: 'farming-1',
        title: 'Organic Farming Guide',
        author: 'Robert Green',
        coverUrl: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad',
        link: 'https://www.gutenberg.org/ebooks/17893',
        readUrl: 'https://www.gutenberg.org/files/17893/17893-h/17893-h.htm'
      },
      {
        id: 'farming-2',
        title: 'Sustainable Agriculture',
        author: 'Maria Garcia',
        coverUrl: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399',
        link: 'https://www.gutenberg.org/ebooks/25064'
      },
      {
        id: 'farming-3',
        title: 'Modern Farming Techniques',
        author: 'David Thompson',
        coverUrl: 'https://images.unsplash.com/photo-1500076656116-558758c991c1',
        link: 'https://www.gutenberg.org/ebooks/28981'
      },
      {
        id: 'farming-4',
        title: 'Urban Farming',
        author: 'Sarah Miller',
        coverUrl: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8',
        link: 'https://www.gutenberg.org/ebooks/34675'
      },
      {
        id: 'farming-5',
        title: 'Hydroponics Basics',
        author: 'John Davis',
        coverUrl: 'https://images.unsplash.com/photo-1585336261022-680e295ce3fe',
        link: 'https://www.gutenberg.org/ebooks/39781'
      }
    ]
  },
  {
    id: 'computers',
    name: 'Computers',
    books: [
      {
        id: 'computers-1',
        title: 'Programming Fundamentals',
        author: 'Alex Turner',
        coverUrl: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea',
        link: 'https://www.gutenberg.org/ebooks/49134',
        readUrl: 'https://www.gutenberg.org/files/49134/49134-h/49134-h.htm'
      },
      {
        id: 'computers-2',
        title: 'Web Development Guide',
        author: 'Jessica Lee',
        coverUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
        link: 'https://www.gutenberg.org/ebooks/44936'
      },
      {
        id: 'computers-3',
        title: 'Artificial Intelligence',
        author: 'Dr. Ryan Chen',
        coverUrl: 'https://images.unsplash.com/photo-1555255707-c07966088b7b',
        link: 'https://www.gutenberg.org/ebooks/51960'
      },
      {
        id: 'computers-4',
        title: 'Cybersecurity Basics',
        author: 'Mark Wilson',
        coverUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b',
        link: 'https://www.gutenberg.org/ebooks/48298'
      },
      {
        id: 'computers-5',
        title: 'Cloud Computing',
        author: 'Emily Brown',
        coverUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
        link: 'https://www.gutenberg.org/ebooks/50962'
      }
    ]
  },
  {
    id: 'education',
    name: 'Education',
    books: [
      {
        id: 'education-1',
        title: 'Modern Teaching Methods',
        author: 'Prof. Anderson',
        coverUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b',
        link: 'https://www.gutenberg.org/ebooks/69022',
        readUrl: 'https://www.gutenberg.org/files/69022/69022-h/69022-h.htm'
      },
      {
        id: 'education-2',
        title: 'Learning Psychology',
        author: 'Dr. Rachel Kim',
        coverUrl: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e',
        link: 'https://www.gutenberg.org/ebooks/55628'
      },
      {
        id: 'education-3',
        title: 'Student Success Guide',
        author: 'Michael Roberts',
        coverUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',
        link: 'https://www.gutenberg.org/ebooks/62981'
      },
      {
        id: 'education-4',
        title: 'Classroom Management',
        author: 'Laura Martinez',
        coverUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7',
        link: 'https://www.gutenberg.org/ebooks/53247'
      },
      {
        id: 'education-5',
        title: 'Digital Learning',
        author: 'Steve Johnson',
        coverUrl: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8',
        link: 'https://www.gutenberg.org/ebooks/57891'
      }
    ]
  }
];