import { DatabaseService } from '../services/database/databaseService';
import { Board } from '../collections/Board/model/boardEntity';
import { Column } from '../collections/Column/model/columnEntity';
import { Story } from '../collections/Story/model/storyEntity';
import { Db } from 'mongodb';

const board = new Board().model;
const column = new Column().model;
const story = new Story().model;

export default function run() {
  deleteBoards();
  deleteColumns();
  deleteStories();
  console.log('All entities deleted');
}

function deleteBoards() {
  board.remove({}, err => {
    console.log(err);
  });
}

function deleteColumns() {
  column.remove({}, err => {
    console.log(err);
  });
}

function deleteStories() {
  story.remove({}, err => {
    console.log(err);
  });
}

run();
