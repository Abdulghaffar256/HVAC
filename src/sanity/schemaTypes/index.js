import { blogType } from "../blogType";
import { coursesType } from "../courses";
import { engType } from "../engType";
import { devType } from "../devType";
import { equipmentType } from "../equipmentType";
import { projectType } from "../projectType";
import { AIType } from "../AIType";



export const schema = {
  types: [blogType, equipmentType, coursesType, engType, devType, projectType, AIType],
};

