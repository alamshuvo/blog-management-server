import { FilterQuery, Query } from 'mongoose';

class QueryBuilder<T> {
  public modelQuery: Query<T[], T>;
  public query: Record<string, unknown>;

  constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
    this.modelQuery = modelQuery;
    this.query = query;
  }
  search(searchableFeilds: string[]) {
    if (this?.query.search) {
      this.modelQuery = this.modelQuery.find({
        $or: searchableFeilds.map(
          (field) =>
            ({
              [field]: { $regex: this.query.search, $options: 'i' },
            }) as FilterQuery<T>,
        ),
      });
    }
    return this;
  }
  filter() {
    let queryObj = { ...this.query };
    if (queryObj.filter) {
      queryObj.author = queryObj.filter;
      delete queryObj.filter;
    }
    const excludeFields = ['search', 'sortBy', 'sortOrder'];
    excludeFields.forEach((field) => delete queryObj[field]);

    this.modelQuery = this.modelQuery.find(queryObj as FilterQuery<T>);

    return this;
  }

  sort() {
    let sortStr = '-createdAt'; // Default sorting

    if (this.query?.sortBy && this.query?.sortOrder) {
      const sortBy = String(this?.query?.sortBy);

      const sortOrder = this?.query?.sortOrder;
      // Check if multiple fields are provided
      const sortFields = sortBy.split(',');

      // Apply the same order ('asc' or 'desc') to all fields
      sortStr = sortFields
        .map((field) => `${sortOrder === 'desc' ? '-' : ''}${field}`)
        .join(' ');
    }

    // Apply the sorting to the model query
    this.modelQuery = this.modelQuery.sort(sortStr);
    return this;
  }

}
export default QueryBuilder;
