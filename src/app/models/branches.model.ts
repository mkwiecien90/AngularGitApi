export interface Branches {
    branches: Branch[];
}

interface Branch {
  name: string;
  commit: Commit;
  protected: boolean;
}

interface Commit {
  sha: string;
  url: string;
}