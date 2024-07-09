import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import { ListItemButton } from '@mui/material';

const ProjectList = ({projects, projectSelect}) => {
    return (
        <List className='w-100 bg-secondary m-0'>
            {projects.map((project) =>
                <>
                    <ListItem className='p-0'>
                        <ListItemButton onClick={() => {
                            projectSelect(project)
                            }}>
                        <ListItemText
                            primary={project.title}
                            secondary={project.date} />
                        </ListItemButton>
                    </ListItem>
                    <Divider />
                </>
            )}
        </List>
    )
}

export default ProjectList;