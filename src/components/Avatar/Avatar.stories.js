
import Avatar from "./Avatar.vue";


export default {
  component: Avatar,
  title: 'General/Avatar',
  //👇 Our events will be mapped in Storybook UI
  argTypes: {
    backgroundColor: { control: 'color' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
    onClick: {},
  },
};
const Template = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { Avatar },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      return { args };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<avatar v-bind="args" />',
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