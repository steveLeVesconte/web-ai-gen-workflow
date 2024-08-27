import { Project } from '../models/Project';

export class ProjectService {
  // ... existing methods ...

  static getNextProject(currentProjectId: string): Project | null {
    const projects = this.getAllProjects();
    const sortedProjects = projects
      .filter(p => !p.isHidden)
      .sort((a, b) => (a.featureOrder || Infinity) - (b.featureOrder || Infinity));
    
    const currentIndex = sortedProjects.findIndex(p => p.id === currentProjectId);
    if (currentIndex === -1 || currentIndex === sortedProjects.length - 1) {
      return null;
    }
    
    return sortedProjects[currentIndex + 1];
  }

  static getPreviousProject(currentProjectId: string): Project | null {
    const projects = this.getAllProjects();
    const sortedProjects = projects
      .filter(p => !p.isHidden)
      .sort((a, b) => (a.featureOrder || Infinity) - (b.featureOrder || Infinity));
    
    const currentIndex = sortedProjects.findIndex(p => p.id === currentProjectId);
    if (currentIndex === -1 || currentIndex === 0) {
      return null;
    }
    
    return sortedProjects[currentIndex - 1];
  }
}
