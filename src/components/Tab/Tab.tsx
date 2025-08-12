import React, { useState } from 'react';
import { styled, Tabs as TabsMui, Tab as TabMui, type TabProps, type TabsProps, Box } from "@mui/material";

export interface TabComponent {
    label: string,
    component?: React.ReactNode
}

interface TabComponentProps {
    tabList: TabComponent[]
}

const CustomTabs = styled(TabsMui)<TabsProps>(({ theme }) => ({
    color: `${theme.palette.grey[100]}`,
    fontWeight: 400
}));

const CustomTab = styled(TabMui)<TabProps>(({ theme }) => ({
    fontWeight: 'normal',
    '&.Mui-selected': {
        fontWeight: 700
    }
}));

const Tabs: React.FC<TabComponentProps> = ({ tabList }) => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box>
            <CustomTabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons={false}>
                {tabList.map((tab: TabComponent, key) => <CustomTab key={key} label={tab.label} />)}
            </CustomTabs>
             <Box sx={{ py: 3 }}>
                {tabList[value]?.component}
            </Box>
        </Box>);
}

export default Tabs;