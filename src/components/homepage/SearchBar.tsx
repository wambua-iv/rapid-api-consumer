import { SearchRounded } from "@mui/icons-material";
import { Container, Box, TextField, InputAdornment } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";

function SearchBar() {
  const { control, handleSubmit } = useForm();

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          width: { xs: "98%", sm: "80%", md: "80%" },
          height: { md: "90px" },
          backgroundColor: "#e9e9e9",
          mx: { xs: "auto", sm: 6, md: 6 },
          mt: { xs: 0, sm: 5, md: 6 },
          mb: 2,
          p: 1,
          borderRadius: "1rem",
          display: "flex",
          flexDirection: { xs: "column", sm: "row", md: "row" },
          position: "relative",
          zIndex: 2,
        }}
      >
        <Controller
          control={control}
          name="location"
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              onChange={onChange}
              value={value || ""}
              onBlur={onBlur}
              label=" "
              placeholder="Choose a location"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchRounded />
                  </InputAdornment>
                ),
              }}
              type="text"
              variant="standard"
              sx={{ width: { sm: "80%", md: "80%" }, mb: 2 }}
            />
          )}
        />
      </Box>
    </Container>
  );
}

export default SearchBar;
