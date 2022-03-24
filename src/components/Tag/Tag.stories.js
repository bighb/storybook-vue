import Tag from './Tag.vue';

export default {
  title: 'General/Tag',
  component: Tag,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
    onClick: {},
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Tag },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<Tag v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
    text: '标签一',
};

export const Secondary = Template.bind({});
Secondary.args = {
    text: '标签二',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  text: '标签三',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  text: '标签四',
};
