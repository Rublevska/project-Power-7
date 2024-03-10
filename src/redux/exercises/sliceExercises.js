import { createSlice } from '@reduxjs/toolkit';
import {
  featchAddExercises,
  featchAllExercises,
  fetchExercisesCategory,
} from './operationsExercises';

const handlePending = (state) => {
  state.isLoading = true;
  state.exercises = [];
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const exercisesSlice = createSlice({
  name: 'exercises',
  initialState: {
    categories: [],
    filter: 'Body parts',
    exercises: [],
    exercisesPage: 1,
    categoryPicked: '',
    categoriesPage: 1,
    categoriesLimit: 10,
    exercisesLimit: 999,
    isLoading: false,
    error: null,
  },
  reducers: {
    changeFilter(state, action) {
      state.filter = action.payload;
      state.categoriesPage = 1;
    },
    changeExercisesPage(state, action) {
      state.exercisesPage += action.payload;
    },
    isCategoryPicked(state, action) {
      state.categoryPicked = action.payload;
    },
    changeCategoriesPage(state, action) {
      state.categoriesPage = action.payload;
    },
    changeCategoriesLimit(state, action) {
      state.categoriesLimit = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchExercisesCategory.pending, handlePending)
      .addCase(fetchExercisesCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.categories = action.payload;
      })
      .addCase(fetchExercisesCategory.rejected, handleRejected)
      .addCase(featchAllExercises.pending, handlePending)
      .addCase(featchAllExercises.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.exercises = action.payload;
      })
      .addCase(featchAllExercises.rejected, handleRejected)
      .addCase(featchAddExercises.pending, (state, action) => {
        state.isLoading = true;
   
      })
      .addCase(featchAddExercises.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
       
      })
      .addCase(featchAddExercises.rejected, handleRejected),
});

export const exercisesReducer = exercisesSlice.reducer;

export const { changeFilter, changeExercisesPage, isCategoryPicked, changeCategoriesPage, changeCategoriesLimit } = exercisesSlice.actions;
