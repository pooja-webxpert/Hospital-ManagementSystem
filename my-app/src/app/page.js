"use client";
import { InputAdornment, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import DoctorsDetail from "@/component/doctors-list";

export default function Home() {
  const { control } = useForm();
  const router = useRouter();

  const handleSearch = (selectedDoctor) => {
    if (selectedDoctor) {
      const formattedName = selectedDoctor.name.replace(/\s+/g, '-').replace(/[^\w-]/g, '');
      router.push(`/doctors-detail/${formattedName}-${selectedDoctor.id}`); 
    }
  };
  

  return (
    <>
      <img className="w-full h-5/6 absolute" src="/background-image.jpg" />
      <div className="relative top-16">
        <div className="background-text bg-slate-100 rounded-lg m-auto">
          <Typography className="!font-extrabold text-center" variant="h3">
            Healthcare for Good Today. Tomorrow. Always
          </Typography>
        </div>
        <Controller
          name="search"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Autocomplete
              className="!mt-10 m-auto !w-8/12 !bg-white rounded-md"
              options={DoctorsDetail}
              getOptionLabel={(option) => option.name || ""} 
              onChange={(event, newValue) => {
                onChange(newValue); 
                handleSearch(newValue); 
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Search For Doctors"
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon style={{ color: "gray", height: "25px" }} />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
          )}
        />
      </div>
    </>
  );
}
