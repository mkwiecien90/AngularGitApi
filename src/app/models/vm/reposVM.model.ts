export class ReposData {
    repositoryName: string;
    loginOfRepositoryOwner: string;
    branches: BranchesData[];

    constructor(repositoryName: string, loginOfRepositoryOwner: string)
    {
        this.repositoryName = repositoryName;
        this.loginOfRepositoryOwner = loginOfRepositoryOwner;
    }
 }
export class BranchesData {
    name: string;
    commit: string;
    commitDescription: string;

    constructor(name: string, commit: string) {
        this.name = name;
        this.commit = commit;
    }
}