export interface IProgram {
	title: string;
	specializedSubjects: string[];
}
export interface IDiscipline {
	title: string;
	firstModule: string[];
	secondModule: string[];
}

export interface IDisciplines {
	disciplinesAr: IProgram[];
}

export interface IFooter {
	title: string;
	paragraph?: string;
	list?: string[];
    bgColor: string
}
