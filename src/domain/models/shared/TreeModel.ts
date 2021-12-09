import { PrimaryKey } from "@/domain";

export interface TreeModel {
  id: PrimaryKey;
  name: string;
  children?: TreeModel[];
}
