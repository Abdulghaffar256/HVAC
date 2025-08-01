import { blogType } from "../blogType";
import { coursesType } from "../courses";
import { engType } from "../engType";
import { devType } from "../devType";
import { equipmentType } from "../equipmentType";
import { projectType } from "../projectType";
import { ProjectType } from "../projectType1";


export const schema = {
  types: [blogType, equipmentType, coursesType, engType, devType, projectType, ProjectType],
};
