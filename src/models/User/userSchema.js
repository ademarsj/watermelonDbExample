import {tableSchema} from '@nozbe/watermelondb';

export default tableSchema({
  name: 'users',
  columns: [
    // {name: 'id', type: 'string', isIndexed: true},
    //All tables automatically have a string column id (of string type) to uniquely identify records
    // https: //nozbe.github.io/WatermelonDB/Schema.html  --> "Special columns"
    {name: 'username', type: 'string'},
    {name: 'password', type: 'string'},
  ],
});
