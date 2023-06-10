import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Blog } from './blogs.schema';
import { User } from './users.schema';
import { Comment, CommentSchema } from './comments.schema';

@Schema()
export class Post {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Blog' })
  blogId: Blog;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;

  @Prop({ type: String })
  images: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ onUpdated: Date.now })
  updatedAt: Date;

  @Prop({ default: 1 })
  status: number;

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Blog' }])
  postLikes: User[];

  @Prop([CommentSchema])
  comments: Comment[];
}

export const PostSchema = SchemaFactory.createForClass(Post);
