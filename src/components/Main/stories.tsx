import { Meta, Story } from 'stories/StoryBookCustomTypes';
import Main from '.';
import IMainProps from './types';

export default {
  title: 'Main',
  component: Main,
} as Meta;

export const Template: Story<IMainProps> = (args) => <Main {...args} />;
