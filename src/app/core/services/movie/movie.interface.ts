import { ActorInterface } from "../actor/actor.interface";
import { CompanyInterface } from "../company/company.interface";

export interface MovieInterface {
  id: number;
  title: string;
  poster: string;
  genre: string[];
  year: number;
  duration: number;
  imbdRating: number;
  actors: number[];
}

export interface MovieInterfaceComplete {
  id: number;
  title: string;
  poster: string;
  genre: string[];
  year: number;
  duration: number;
  imbdRating: number;
  actors: ActorInterface[];
  companies: CompanyInterface[];
}