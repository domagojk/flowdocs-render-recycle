// graph data from webcola
// flowdocs structure will NOT be the same!

export default {
  'nodes': [
      {'name': '0', 'width': 60, 'height': 40, 'desc': 123 },
      {'name': '1', 'width': 60, 'height': 40, 'desc': 123 },
      {'name': '2', 'width': 60, 'height': 40},
      {'name': '3', 'width': 60, 'height': 40},
      {'name': '4', 'width': 60, 'height': 40},
      {'name': '5', 'width': 60, 'height': 40},
      {'name': '6', 'width': 60, 'height': 40}
  ],
  'links': [
      {'source': 1, 'target': 2},
      {'source': 2, 'target': 3},
      {'source': 3, 'target': 4},
      {'source': 0, 'target': 1},
      {'source': 2, 'target': 0},
      {'source': 3, 'target': 5},
      {'source': 0, 'target': 5}
  ],
  'groups': [
    {'leaves': [0], 'groups': [1]},
    {'leaves': [1, 2]},
    {'leaves': [3, 4]}
  ]
}
