export interface Project {
    id: string;
    title: string;
    listPageDescription: string;   // used on List Page
    homePageDescription: string;   // used on Home Page
    listPageImageUrl: string;      // used on List Page
    homePageImageUrl: string;      // used on Home Page
    isFeatured: boolean; // is featured on the Home Page
    projectDate: Date; // the date the project was completed
    isHidden: boolean; // is hidden from both the project List Page and the Home Page
    featureOrder?: number; // the order in which the project appears on the Home Page
  }