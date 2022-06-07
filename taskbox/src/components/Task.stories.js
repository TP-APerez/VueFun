import Task from './Task.vue';

import { action } from '@storybook/addon-actions';

export default {
  component: Task,
  excludeStories: /.*Data$/,
  title: 'Task',
  argTypes: {
    onPinTask: {},
    onArchiveTask: {},
  },
};

// args is short for Arguments, which allow us to live-edit our components with the controls addon without restarting Storybook.
// action() allows to create a callback that appears in the actions panel of the Storybook UI when clicked.
// Actions help you verify interactions when building UI components in isolation. Oftentimes you wont have access to the functions and state you have in context of the app. use action() to stub them in.

export const actionsData = {
  onPinTask: action('pin-task'),
  onArchiveTask: action('archive-task'),
};

const Template = args => ({
  components: { Task },
  setup() {
    return { args, ...actionsData };
  },
  template: '<Task v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};

