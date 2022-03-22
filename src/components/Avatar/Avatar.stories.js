
import Avatar from "./Avatar.vue";

import { action } from '@storybook/addon-actions';

export default {
  component: Avatar,
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  title: 'Avatar',
  //👇 Our events will be mapped in Storybook UI
  argTypes: {
    onPinTask: {},
    onArchiveTask: {},
  },
};

export const actionsData = {
  onPinTask: action('pin-task'),
  onArchiveTask: action('archive-task'),
};

const Template = args => ({
  components: { Avatar },
  setup() {
    return { args, ...actionsData };
  },
  template: '<Avatar v-bind="args" />',
});
export const Default = Template.bind({});
Default.args = {
    title:'我是传入标题'
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: '状态1',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: '状态2',
  },
};