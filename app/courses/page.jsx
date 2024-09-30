"use client";

import { useState, useEffect } from "react";
import CourseCard from "../modules/Home/TopFeaturedCourses/CourseCard";
import { CourseData } from "../../static-data/CourseData";
import "../assets/Course.css";
import Footer from "../components/Footer/page";
import Header from "../components/Header/page";
import HeroSection from "./HeroSection";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  IconButton,
  Autocomplete,
  TextField,
  Popover,
  Typography,
} from '@mui/material';
import GridViewIcon from '@mui/icons-material/GridView';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import WindowIcon from '@mui/icons-material/Window';
import AppsIcon from '@mui/icons-material/Apps';

export default function Courses() {
  const [selectedCategories, setSelectedCategories] = useState(["All"]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(6);
  const [sortOrder, setSortOrder] = useState("rating");
  const [gridView, setGridView] = useState(true);
  const [columnLayout, setColumnLayout] = useState(1);
  const [anchorEl, setAnchorEl] = useState(null);
  const [teacherSearch, setTeacherSearch] = useState("");

  const categories = [
    "All",
    "Featured",
    "Business",
    "Photography",
    "Development",
  ];

  useEffect(() => {
    const savedLayout = localStorage.getItem('columnLayout');
    if (savedLayout) {
      setColumnLayout(JSON.parse(savedLayout));
    }
  }, []);

  const filteredCourses = selectedCategories.includes("All")
    ? CourseData
    : CourseData.filter((course) => selectedCategories.includes(course.category));

  const calculateAverageRating = (subratings) => {
    if (!subratings || subratings.length === 0) return 0;
    const total = subratings.reduce((acc, rating) => acc + parseFloat(rating), 0);
    return total / subratings.length;
  };

  const sortedCourses = [...filteredCourses]
    .filter((course) =>
      course.teacher && course.teacher.toLowerCase().includes(teacherSearch.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "rating") {
        return calculateAverageRating(b.subratings) - calculateAverageRating(a.subratings);
      }
      return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
    });

  const handleCategoryChange = (event, value) => {
    setLoading(true);
    setSelectedCategories(value);
    setPage(0);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  const handleSortChange = (event) => {
    setLoading(true);
    setSortOrder(event.target.value);
    setPage(0);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const toggleGridView = () => {
    setGridView(!gridView);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <Header />
      <HeroSection />
      <div className="md:container md:mx-auto md:w-4/5 categoryTabs md:flex md:justify-between">
        <div className="md:w-2/5 me-8 mb-5 md:mb-0 md:me-0">
          <Autocomplete
            multiple
            options={categories}
            value={selectedCategories}
            onChange={handleCategoryChange}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Select Categories"
                placeholder="Categories"
              />
            )}
          />
        </div>
        <div>
          <FormControl variant="outlined" sx={{ minWidth: 200, marginBottom: 2 }}>
            <InputLabel>Sort by</InputLabel>
            <Select
              value={sortOrder}
              onChange={handleSortChange}
              label="Sort by"
            >
              <MenuItem value="asc">Price: Low to High</MenuItem>
              <MenuItem value="desc">Price: High to Low</MenuItem>
              <MenuItem value="rating">Rating</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined" sx={{ minWidth: 200, marginLeft: 2 }}>
            <Autocomplete
              freeSolo
              options={[...new Set(sortedCourses.map(course => course.teacher).filter(Boolean))]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  label="Search By Teacher"
                  onChange={(e) => setTeacherSearch(e.target.value)}
                />
              )}
              onInputChange={(event, newInputValue) => {
                setTeacherSearch(newInputValue);
              }}
            />
          </FormControl>
          <IconButton onClick={(e) => setAnchorEl(e.currentTarget)} aria-label="toggle grid view">
            <GridViewIcon />
          </IconButton>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={() => setAnchorEl(null)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Typography>
              <MenuItem onClick={() =>{
                setColumnLayout(1)
                localStorage.setItem('columnLayout', "1")
                setAnchorEl(null);
              }}>
                <ViewHeadlineIcon />
              </MenuItem>
              <MenuItem onClick={() => {
                setColumnLayout(2)
                localStorage.setItem('columnLayout', "2")
                setAnchorEl(null);
              }}>
                <WindowIcon />
              </MenuItem>
              <MenuItem onClick={() => {
                setColumnLayout(3)
                localStorage.setItem('columnLayout', "3")
                setAnchorEl(null);
              }}>
                <AppsIcon />
              </MenuItem>
            </Typography>
          </Popover>
        </div>
      </div>

      {gridView ? (
        <div className={`gridContainer md:w-4/5 md:mx-auto grid-cols-${columnLayout}`}>
          {sortedCourses.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((course, index) => (
            <CourseCard key={index} course={course} id={course.id} />
          ))}
        </div>
      ) : (
        <TableContainer component={Paper} className="md:container md:mx-auto md:w-4/5 courseGrid mb-5">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Courses</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedCourses.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((course, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <CourseCard course={course} id={course.id} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <TablePagination
        sx={{ margin: "auto" }}
        rowsPerPageOptions={[3, 4, 5, 6, 12, 24]}
        component="div"
        count={sortedCourses.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
        labelDisplayedRows={({ from, to, count }) =>
          (count > rowsPerPage) ? `${from}-${to} of ${count}` : ''
        }
      />
      <Footer />

      <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}