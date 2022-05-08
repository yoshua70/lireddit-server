import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Post {
  @Field(() => Int)
  @PrimaryKey()
  id!: number;

  @Field(() => String)
  @Property({ type: "date", onCreate: () => new Date(), nullable: true })
  createdAt? = new Date();

  @Field(() => String)
  @Property({ type: "date", onUpdate: () => new Date(), nullable: true })
  updatedAt? = new Date();

  @Field(() => String)
  @Property({ type: "text" })
  title!: string;

  constructor(title: string) {
    this.title = title;
  }
}
