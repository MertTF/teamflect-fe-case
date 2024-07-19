import List from '@/components/Icons/List';
import Tree from '@/components/Icons/Tree';

/** @typedef {object} Goal
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {string} owner
 * @property {string} startDate
 * @property {string} endDate
 * @property {string?} parentId
 * @property {string?} progress
 */

export const listingTypes = [
  {
    label: (
      <>
        <Tree />
        Tree
      </>
    ),
    value: 'Tree',
  },
  {
    label: (
      <>
        <List />
        List
      </>
    ),
    value: 'List',
  },
];
