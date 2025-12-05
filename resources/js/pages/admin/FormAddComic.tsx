import { FileUploadDemo } from "@/components/admin-comp/FileUploadDemo";
import AdminLayout from "@/components/layouts/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

const FormAddComic = () => {
    const form = useForm();
    return (
        <AdminLayout>
            <div className="w-full space-y-6 my-8 mx-auto max-w-full">
                {/* Main Card */}
                <Card className="pb-0 gap-0 mx-6 md:mx-8">
                    <CardHeader className="border-b border-border gap-0">
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <h1 className="text-primary text-4xl font-bold capitalize">
                                Add New comic
                            </h1>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
                            <Form {...form}>
                                <div className="flex flex-col w-full">
                                    <FormField
                                        control={form.control}
                                        name="title"
                                        render={({ field }) => (
                                            <FormItem className="w-full">
                                                <FormLabel>Title</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="text"
                                                        placeholder="Example: One Piece, Solo Leveling, Magic Emperor, etc."
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormDescription />
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="slug"
                                        render={({ field }) => (
                                            <FormItem className="w-full">
                                                <FormLabel>Slug</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="text"
                                                        placeholder="Example: one-piece, dragon-ball, solo-leveling, etc."
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="author"
                                        render={({ field }) => (
                                            <FormItem className="w-full">
                                                <FormLabel>Author</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="text"
                                                        {...field}
                                                        placeholder="Example: Eiichiro Oda, Akutami Gege, etc."
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                    <Select>
                                        <Label
                                            htmlFor="status"
                                            className="mt-3"
                                        >
                                            Status
                                        </Label>
                                        <SelectTrigger
                                            className="w-full mt-3"
                                            id="status"
                                        >
                                            <SelectValue placeholder="Status Comic" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>
                                                    Status
                                                </SelectLabel>
                                                <SelectItem value="ongoing">
                                                    Ongoing
                                                </SelectItem>
                                                <SelectItem value="completed">
                                                    Completed
                                                </SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    <div className="mt-5">
                                        <Label htmlFor="synopsis">
                                            Synopsis
                                        </Label>
                                        <Textarea
                                            id="synopsis"
                                            className="mt-3"
                                            placeholder="Write Synopsis here etc..."
                                        />
                                    </div>
                                    <div className="mt-5">
                                        <Label>Upload Cover</Label>
                                        <FileUploadDemo />
                                    </div>
                                    <div className="mt-10 flex gap-5">
                                        <Button
                                            className="w-full"
                                            type="submit"
                                        >
                                            Add Comic
                                        </Button>
                                        <Button
                                            type="reset"
                                            variant={"outline"}
                                            className="w-full"
                                        >
                                            Cancel
                                        </Button>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AdminLayout>
    );
};

export default FormAddComic;
